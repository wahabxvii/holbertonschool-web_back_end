export default function createInt8TypedArray(length,position, value) {
  if (position < 0 || position >= length) {
    throw new Error('position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  dataView.setInt8(position, value);
  return dataView;
}
