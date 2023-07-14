import React from 'react';

import { Tabs, TabSwitcher, TabContent, Button } from "@/components";
import Slider from './slider';

import {store} from '@/stores'
import { getProducts } from "@/stores/products/productSlice";

export default async function Product() {
    const { payload: products } = await store.dispatch(getProducts());


    return (
        <section className="product">
            <div className="container">
                <h2>Ürünlerimiz</h2>

                <Tabs>
                    <div className="tabs__head">
                        <TabSwitcher tabId={0}>
                            Takip Cihazları
                        </TabSwitcher>
                        <TabSwitcher tabId={1}>
                            Aksesuarlar
                        </TabSwitcher>
                    </div>
                    <div className="tabs__content">
                        <TabContent id={0}>
                            <Slider object={products.products.slice(0,7)} />
                        </TabContent>
                        <TabContent id={1}>
                            <Slider object={products.products.slice(7,14)} />
                        </TabContent>
                    </div>
                </Tabs>
                <div className="buttons buttons-m--reverse">
                    <Button text="Detaylı İncele" secondary="true" />
                    <Button text="Servis Noktalarını Gör" />
                </div>
            </div>
        </section>
    )
}
