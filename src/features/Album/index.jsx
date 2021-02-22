import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from "../Album/conponents/AlbumList";
AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Xuân Sum Vầy',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/avatars/7/2/8/1/7281bbd8d79f2d7c8c405292af6b1d1c.jpg'
        },
        {
            id: 2,
            name: 'Nhạc Hay Tuần Qua',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/4/f/2/b4f239aab45190cc188aabba037f3e5a.jpg'
        },
        {
            id: 3,
            name: 'Nhạc Việt Nghe Nhiều Nhất',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/8/7/7/48777810a5a68c5ffa2d95aa369f7a06.jpg'
        },
    ];
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;