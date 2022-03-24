import { waitFor } from '@testing-library/dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { valueDDD, stateValidate } from '../../__mocks__/filemock';
import { PlansProvider, usePlans } from '../../src/hooks/usePlans';
import { useState } from 'react';



describe('Plans hook tests', () => {

  test('should return minutes', async () => {

    const { result } = renderHook(() => usePlans(), {
      wrapper: PlansProvider
    });

    const data = result.current.minutes;

    expect(data).toBe(0);
  });

  test('should return withPlan', async () => {

    const { result } = renderHook(() => usePlans(), {
      wrapper: PlansProvider,
    });

    const data = result.current.withPlan;

    expect(data).toBe(0);
  });

  test('should return withoutPlan', async () => {

    const { result } = renderHook(() => usePlans(), {
      wrapper: PlansProvider
    });

    const data = result.current.withoutPlan;

    expect(data).toBe(0);
  });

  // test('should return handleSearchDDD', async () => {

  //   const { result } = renderHook(() => usePlans(), {
  //     wrapper: PlansProvider
  //   });

  //   const data = result.current.handleSearchDDD(11, 'origin');

  //   expect(data).toBe(0);
  // });

  // test('should return handleSelectPlanSimulate', async () => {

  //   const { result } = renderHook(() => usePlans(), {
  //     wrapper: PlansProvider
  //   });

  //   const data = result.current.handleSelectPlanSimulate(170);

  //   expect(data).toEqual(0);
  // });

  // test('should return handleSelectMinutesConversation', async () => {

  //   const { result } = renderHook(() => usePlans(), {
  //     wrapper: PlansProvider
  //   });

  //   const data = result.current.handleSelectMinutesConversation(200);

  //   expect(data).toEqual(0);
  // });

});

// withPlan: number;
// withoutPlan: number;
// handleSearchDDD: (valueDDD: number, id: string) => void;
// handleSelectPlanSimulate: (valuePlan: number) => void;
// handleSelectMinutesConversation: (valueMinutes: number) => void;