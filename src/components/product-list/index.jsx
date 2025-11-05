import { useState, useCallback, useEffect } from 'react';

import { useTelegram } from '../../assets/hooks/useTelegram';

import ProductItem from '../product-item';

import './index.css';

const products = [
  { id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые' },
  { id: '2', title: 'Куртка', price: 12000, description: 'Зеленого цвета, теплая' },
  { id: '3', title: 'Джинсы 2', price: 5000, description: 'Синего цвета, прямые' },
  { id: '4', title: 'Куртка 8', price: 122, description: 'Зеленого цвета, теплая' },
  { id: '5', title: 'Джинсы 3', price: 5000, description: 'Синего цвета, прямые' },
  { id: '6', title: 'Куртка 7', price: 600, description: 'Зеленого цвета, теплая' },
  { id: '7', title: 'Джинсы 4', price: 5500, description: 'Синего цвета, прямые' },
  { id: '8', title: 'Куртка 5', price: 12000, description: 'Зеленого цвета, теплая' }
];

const getTotalPrice = (items) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

const apiUrl = import.meta.env.VITE_API_URL;

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([]);
  const { tg, queryId } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
      queryId
    };

    if (queryId) {
      fetch(`${apiUrl}/web-data`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    } else {
      console.log('Локальный тест:', data);
    }
  }, [addedItems, queryId]);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);
    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    };
  }, [onSendData]);

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);

    let newItems = [];
    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id != product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)}`
      });
    }
  };

  return (
    <div className={'list'}>
      {products.map((item) => (
        <ProductItem key={item.id} product={item} onAdd={onAdd} className={'item'} />
      ))}
      <button onClick={onSendData}>send</button>
    </div>
  );
};

export default ProductList;
