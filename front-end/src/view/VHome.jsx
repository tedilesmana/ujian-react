import React, { Component } from 'react';
import axios from 'axios';

class VHome extends Component {

    state = {
        post: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000')
            .then(function(response) {
                // handle success
                console.log(response.data.response);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
            .then(function() {
                // always executed
            });
    }

    render() {
        return (
            <div id="c-wrapper">
                <div class="c-right">
                    <div class="cl-right">
                        <img src={require('../assets/img/img001.jpg')} alt="boohoo" className="img001"/>
                        <img src={require('../assets/img/img002.png')} alt="boohoo" className="img002"/>
                        <span class="btn-large">
                            Follow
                        </span>

                        <div class="c-text">
                            <div class="text">
                                <h4 class="judul001">Adobe</h4>
                                <h4 class="hastag">@Adobe</h4>
                                <p>
                                    Changing the world through digital experiences. Need help? Visit us at <a href="">http://helpx.adobe.com/support.html</a>  or reach out to <a href="">@AdobeCare</a> 
    .
                                </p>
                                <span class="lc"><i class="fa fa-map-marker"></i> Location: All over the world.</span>
                                <span class="lc"><i class="fas fa-link"></i><a href="">theblog.adobe.com</a></span>
                                <span class="lc"><i class="fa fa-calendar"></i> Joined August 2009</span>
                                <div>
                                    <span class="follow"><b>500</b> Following</span>
                                    <span class="follow"><b>625.5K</b> Followers</span>
                                </div>
                            </div>
                            <div id="nav-battom">
                                <span class="menu-bottom">Tweets</span>
                                <span class="menu-bottom">Tweets & replies</span>
                                <span class="menu-bottom">Media</span>
                                <span class="menu-bottom">Likes</span>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="c-left">
                    <div>
                        <h4>Baru di Twitter?</h4>
                        <p>Daftar sekarang untuk mendapatkan timeline personalisasi Anda</p>
                        <button>Daftar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default VHome;