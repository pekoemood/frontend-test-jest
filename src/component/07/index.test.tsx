import { render, screen } from '@testing-library/react';
import { RegisterAddress } from '../../05/07/RegisterAddress';
import { clickSubmit, inputContactNumber, inputDeliveryAddress } from '../../05/07/testingUtils';
import { mockPostMyAddress } from './fetch';


async function fillValuesAndSubmit() {
  const contactNumber = await inputContactNumber();
  const deliveryAddress = await inputDeliveryAddress();
  const submitValues = {...contactNumber, ...deliveryAddress};
  await clickSubmit();
  return submitValues;
}

test('成功時に「登録しました」が表示される', async () => {
  const mockFn = mockPostMyAddress();
  render(<RegisterAddress />);
  const submitValues = await fillValuesAndSubmit();
  expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(screen.getByAltText('登録しました')).toBeInTheDocument();
})

