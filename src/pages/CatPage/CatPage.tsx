import React from "react";
import { useRef, useEffect } from "react";
import { Group, Header, Button, FormItem, Input, Title } from "@vkontakte/vkui";
import { useFetchCatFact } from "../../shared/api/queries";
import { ErrorModal } from "../../widgets/ErrorModal";


export const CatPage: React.FC = () => {
  const { data, isFetching, isError, error, refetch } = useFetchCatFact();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    refetch();
  }

  useEffect(() => {
    if (data && inputRef.current) {
      const words = data.split(' ');
      const firstWordEndIndex = words.slice(0, 1).join(' ').length;
      inputRef.current.setSelectionRange(firstWordEndIndex, firstWordEndIndex);
      inputRef.current.focus();
    }
  }, [data]);

  return (
    <>
      <Group header={
        <Header mode="primary">
          <Title level="2">Факт</Title>
        </Header>}>
        <FormItem>
          <Input
            getRef={inputRef}
            aria-labelledby="fact field"
            id="fact"
            type="text"
            name="fact"
            placeholder="Нажми на кнопку!"
            value={data}
            required
            autoFocus
          />
        </FormItem>
        <Button loading={isFetching} onClick={handleClick} disabled={isFetching} style={{ marginLeft: '16px' }}>Получить!</Button>
        {isError && <ErrorModal refetch={refetch} error={error} />}
      </Group>
    </>
  );
};
