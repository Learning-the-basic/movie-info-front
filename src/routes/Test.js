import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
class Detail extends React.Component {

    state = {}
    
    componentDidMount(){
        this.getInfo();
    }
    
    getInfo = async () => {
        const movieinfo = await this.callApi()
        this.setState(movieinfo);
        console.log(movieinfo);
    }

    callApi = () => {
        const match = this.props.match;
        const tname = useParams();
        const KEY2 = "80HF21BI401E15RFQ193"    //KMDB
        return fetch(`/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${tname.id}&ServiceKey=${KEY2}`)
        .then(response => response.json())
        //.then(json => console.log(json))
        .then(json => json.Data[0].Result[0])
        .catch(err => console.log(err))
    }

    getPoster = () => {
        const poster = this.state.posters.split("|");
        return poster[0];
    }

    getActor = () => {
        const actor = this.state.actor.map((actor, index) => {
            return <span key={index}>{actor.actorNm}</span>
        })
        return actor
    }

    getDirector = () => {
        const director = this.state.director.map((director, index) => {
            return <span key={index}>{director.directorNm}</span>
        })
        return director
    }
    
    render(){
        return (
            <div className="movieInfo">
                <h4 className="title">{this.state.title} {this.state.titleEng}</h4>
                {this.state.posters ? <div className="poster"><img src={this.getPoster()} alt={this.state.title} /></div> : null}
                <div className="formInfo">
                    <dl>
                        <dt>장르</dt>
                        <dd>{this.state.genre}</dd>
                    </dl>
                    <dl>
                        <dt>국가</dt>
                        <dd>{this.state.nation}</dd>
                    </dl>
                </div>
                <div className="formInfo">
                    <dl>
                        <dt>개봉일</dt>
                        <dd>{this.state.repRlsDate}</dd>
                    </dl>
                    <dl>
                        <dt>상영시간</dt>
                        <dd>{this.state.runtime}분</dd>
                    </dl>
                </div>
                <div className="formInfo">
                    <dl>
                        <dt>감독</dt>
                        <dd>{this.state.director ? this.getDirector() : null}</dd>
                    </dl>
                    <dl>
                        <dt>배우</dt>
                        <dd>{this.state.actor ? this.getActor() : null}</dd>
                    </dl>
                </div>
                <div className="formContent">
                    <dl>
                        <dt>줄거리</dt>
                        <dd>{this.state.plot}</dd>
                    </dl>
                </div>
            </div>
        );
    }
}

export default Detail;