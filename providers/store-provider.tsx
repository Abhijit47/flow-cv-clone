'use client';

import { AppStore, makeStore } from '@/store';
import { useState } from 'react';
import { Provider } from 'react-redux';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create the store once using a lazy initializer so we don't read refs during render
  const [store] = useState<AppStore>(() => makeStore());

  return <Provider store={store}>{children}</Provider>;
  // const storeRef = useRef<AppStore>(undefined);
  // if (!storeRef.current) {
  //   // Create the store instance the first time this renders
  //   storeRef.current = makeStore();
  // }

  // return <Provider store={storeRef.current}>{children}</Provider>;
}
