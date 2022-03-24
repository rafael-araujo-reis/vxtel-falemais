import { act } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import { api } from "../../src/services/api";
import { resultPriceMinute, originDDD, destinationDDD } from "../../__mocks__/filemock";

const apiMock = new MockAdapter(api);

describe('Search DDD', () => {

  const url = `/callprice/originDDD/${originDDD}/destinationDDD/${destinationDDD}`;

  test('should request api success', async () => {
    act(() => {
      apiMock.onGet(url)
        .reply(200, resultPriceMinute);
    });
  });

  test('should request api erro', async () => {
    act(() => {
      apiMock.onGet(url)
        .reply(500, []);
    });
  });

  test('should request api erro network', async () => {
    act(() => {
      apiMock.onGet(url)
        .networkError();
    });
  });
});