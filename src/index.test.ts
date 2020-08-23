import * as HttpStatusV1 from '../test/v1';
import * as HttpStatusV2 from './index';
import {
  getReasonPhrase, getStatusCode, ReasonPhrases, StatusCodes,
} from './index';
import codes from '../codes.json';

describe('Backwards compatability with v1', () => {
  test('Gets codes exported by constant', () => {
    codes.forEach((o) => {
      expect((HttpStatusV1 as any)[o.constant]).toBe(o.code);
      expect((HttpStatusV2 as any)[o.constant]).toBe(o.code);
    });
  });

  test('Gets reason phrase from status code', () => {
    codes.forEach((o) => {
      if (o.code !== 500) {
        expect(HttpStatusV1.getStatusText(o.code)).toBe(o.phrase);
        expect(HttpStatusV2.getStatusText(o.code)).toBe(o.phrase);
      } else {
        // Breaking Change. These are different.
        expect(HttpStatusV1.getStatusText(o.code)).toBe('Server Error');
        expect(HttpStatusV2.getStatusText(o.code)).toBe(o.phrase);
      }
    });
  });

  test('Gets status code from phrase', () => {
    codes.forEach((o) => {
      if (o.code !== 500) {
        expect(HttpStatusV1.getStatusCode(o.phrase)).toBe(o.code);
        // eslint-disable-next-line import/no-named-as-default-member
        expect(HttpStatusV2.getStatusCode(o.phrase)).toBe(o.code);
      } else {
        // Breaking Change. These are different.
        expect(HttpStatusV1.getStatusCode('Server Error')).toBe(o.code);
        expect(HttpStatusV2.getStatusCode(o.phrase)).toBe(o.code);
      }
    });
  });
});

describe('v2', () => {
  test('StatusCodes', () => {
    // Divide by two because TypeScript enums contain both key and value
    // when values are Number types
    expect(Object.keys(StatusCodes).length / 2).toBe(codes.length);
    codes.forEach((o) => {
      expect((<any>StatusCodes)[o.constant]).toBe(o.code as number);
    });
  });

  test('ReasonPhrases', () => {
    expect(Object.keys(ReasonPhrases).length).toBe(codes.length);
    codes.forEach((o) => {
      expect((<any>ReasonPhrases)[o.constant]).toBe(o.phrase);
    });
  });

  test('getReasonPhrase', () => {
    codes.forEach((o) => {
      expect(getReasonPhrase(o.code)).toBe(o.phrase);
    });
  });

  test('getStatusCode', () => {
    codes.forEach((o) => {
      expect(getStatusCode(o.phrase)).toBe(o.code);
    });
  });

  test('getReasonPhrase nonexistent phrase', () => {
    expect(() => { getReasonPhrase(9999999); }).toThrowError(/Status code does not exist: 9999999/);
  });

  test('getStatusCode nonexistent code', () => {
    expect(() => { getStatusCode('blah blah'); }).toThrowError(/Reason phrase does not exist: blah blah/);
  });
});
