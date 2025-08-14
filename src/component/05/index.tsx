import { useId, useState } from 'react';
import { Agreement } from '../03';
import { InputAccount } from '../04';
import { format } from 'prettier';

export function Form () {
  const [checked, setChecked] = useState(false);
  const heading = useId();
  return (
    <form aria-labelledby={heading}>
      <h2 id={heading}>新規アカウント登録</h2>
      <InputAccount />
      <Agreement
        onChange={(e) => setChecked(e.currentTarget.checked)} 
      />
      <div>
        <button disabled={!checked}>サインアップ</button>
      </div>
    </form>
  );
};