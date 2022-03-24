import { act } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import apiSearchDDD from "../../src/services/search-ddd";
import { valueDDD, resultSearchDDD } from "../../__mocks__/filemock";

const apiSearchDDDMock = new MockAdapter(apiSearchDDD);
const url = `/ddd/v1/${valueDDD}`;

describe('Search DDD', () => {

  test('should request api success', async () => {
    act(() => {
      apiSearchDDDMock.onGet(url)
        .reply(200, resultSearchDDD);
    });
  });

  test('should request api erro', async () => {
    act(() => {
      apiSearchDDDMock.onGet(url)
        .reply(500, []);
    });
  });

  test('should request api erro network', async () => {
    act(() => {
      apiSearchDDDMock.onGet(url)
        .networkError();
    });
  });
});