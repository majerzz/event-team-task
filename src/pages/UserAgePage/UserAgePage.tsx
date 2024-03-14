import React, { useEffect, useRef, useState } from "react";
import { Button, FormItem, Group, Header, Input, Text, Title } from "@vkontakte/vkui";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useFetchAgeData } from "../../shared/api/queries";
import { ErrorModal } from "../../widgets/ErrorModal";
import { schema } from "./schema";
import { STALE_TIME } from "../../shared/constants";

export const UserAgePage: React.FC = () => {
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [debouncedInputValue, setDebouncedInputValue] = useState('');

  const { data, isFetching, isError, error, refetch } = useFetchAgeData(debouncedInputValue, {
    enabled: debouncedInputValue.length > 0,
    staleTime: STALE_TIME,
  });

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState: { errors } } = methods;

  const watch = useWatch(methods);

  useEffect(() => {
    debounceTimer.current = setTimeout(() => {
      if (watch.name) {
        handleSubmit(onSubmit)();
      }
    }, 3000);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [handleSubmit, watch.name]);

  const onSubmit = (formData: { name: string }) => {
    setDebouncedInputValue(formData.name);
  };

  return (
    <Group header={
      <Header mode="primary">
        <Title level="2">
          Возраст: {data !== null ? data : "не найдено"}
        </Title>
      </Header>
    }>
      <form onSubmit={handleSubmit(onSubmit)} {...register("name")}>
        <FormItem status={errors.name ? "error" : "default"}>
          <Input
            {...register("name")}
            aria-labelledby="name field"
            type="text"
            placeholder="Введите имя..."
            required
            autoFocus
          />
        </FormItem>
        {errors.name && (
          <Text style={{ color: "red", margin: "0px 16px 16px 16px" }}>{errors.name.message}</Text>
        )}
        <Button loading={isFetching} type="submit" disabled={isFetching} style={{ marginLeft: '16px' }}>Получить!</Button>
      </form>
      {isError && <ErrorModal refetch={refetch} error={error} />}
    </Group>
  );
};
