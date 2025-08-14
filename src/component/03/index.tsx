type Props = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export function Agreement({ onChange }: Props) {
  return (
    <fieldset>
      <legend>利用規則の同意</legend>
      <label htmlFor="">
        <input type="checkbox" onChange={onChange} />
        当サービスの<a href="/terms">利用規則</a>を確認し、これに同意します
      </label>
    </fieldset>
  )
}

