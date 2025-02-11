import { createContext, useContext } from "react";
import { FieldValues, useForm, UseFormReturn } from "react-hook-form";

const RHFContext = createContext<unknown>(null);

const useGlobalRHFContext = () => {
  const {
    clearErrors,
    control,
    formState,
    getFieldState,
    getValues,
    handleSubmit,
    register,
    reset,
    resetField,
    setError,
    setFocus,
    setValue,
    trigger,
    unregister,
    watch,
  } = useForm();
  return {
    /**
     * The provider component for the RHF context
     *
     * # Sample usage:
     *
     * ```jsx
     * const App = ({children}) => {
     *   const { RHFProvider, providerValues } = useGlobalRHFContext();
     *   return (
     *     <>
     *       <RHFProvider value={providerValues}>
     *         {children}
     *       </RHFProvider>
     *     </>
     *   );
     * };
     * ```
     */
    RHFProvider: RHFContext.Provider,

    /**
     * These values must be passed into the `value` prop of the
     * RHFProvider
     *
     * # Sample usage:
     *
     * ```jsx
     * const App = ({children}) => {
     *   const { RHFProvider, providerValues } = useGlobalRHFContext();
     *   return (
     *     <>
     *       <RHFProvider value={providerValues}>
     *         {children}
     *       </RHFProvider>
     *     </>
     *   );
     * };
     * ```
     */
    providerValues: {
      clearErrors,
      control,
      formState,
      getFieldState,
      getValues,
      handleSubmit,
      register,
      reset,
      resetField,
      setError,
      setFocus,
      setValue,
      trigger,
      unregister,
      watch,
    },
    methods: useContext(RHFContext) as UseFormReturn<
      FieldValues,
      unknown,
      undefined
    >,
  };
};

export default useGlobalRHFContext;
