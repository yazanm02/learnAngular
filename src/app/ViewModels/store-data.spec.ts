import { StoreData } from './store-data';

describe('StoreData', () => {
  it('should create an instance', () => {
    const store = new StoreData('Test Store', 'https://example.com/image.jpg', ['Branch1', 'Branch2']);
    expect(store).toBeTruthy();
  });
});
