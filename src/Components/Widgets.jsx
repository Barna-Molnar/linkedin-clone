import './Widgets.css';
import { FiberManualRecord, Info } from '@mui/icons-material';
import React from 'react';

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <Info />
            </div>
            {newsArticle("Papa is back on the top", "Top news - 9999 renders")}
            {newsArticle("Papa is back on the top", "Top news - 9999 renders")}
            {newsArticle("Papa is back on the top", "Top news - 9999 renders")}
            {newsArticle("Papa is back on the top", "Top news - 9999 renders")}
            {newsArticle("Papa is back on the top", "Top news - 9999 renders")}
            {newsArticle("Papa is back on the top", "Top news - 9999 renders")}
        </div>
    );
};

export default Widgets;
