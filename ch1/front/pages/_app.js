import React from 'react';
import Head from 'next/head';
import  from '';
import AppLayout from '../components/AppLayout';
import { isRegExp } from 'util';

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.5/antd.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.5/antd.js" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </>
    );
};

export default NodeBird;