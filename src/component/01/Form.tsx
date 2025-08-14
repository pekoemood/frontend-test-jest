type Props = {
  name: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

export function Form({name, onSubmit}: Props): JSX.Element {
  return (
    <form 
      onSubmit={(e) => {
      e.preventDefault();
      onSubmit?.(e);
      }}>
        <h2>アカウント情報</h2>
        <p>{name}</p>
        <div>
          <button role="button">編集する</button>
        </div>
    </form>
  );
}