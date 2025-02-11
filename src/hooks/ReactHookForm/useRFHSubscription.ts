import { FieldValue, FieldValues } from "react-hook-form";
import useGlobalRHFContext from "./useGlobalRHFContext";

/**
 * subscribe to a registered Global React Hook Form value,
 * allowing you to get its live value every time it changes
 *
 * @param name name of the field you would like to query.
 * The field must be connected to the Global React Hook Form Context
 */
const useRHFSubscription = (name: string) => {
  const {
    methods: { watch },
  } = useGlobalRHFContext();

  const value: FieldValue<FieldValues> = watch(name);

  return value;
};

export default useRHFSubscription;
