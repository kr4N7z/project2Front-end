import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'
import { FriendsService } from 'src/app/services/friends.service';

@Component({
  selector: 'app-mapsvg',
  templateUrl: './mapsvg.component.html',
  styleUrls: ['./mapsvg.component.css']
})
export class MapsvgComponent implements OnInit {
  // private width = 900;
  // private height = 600;
  // private svg = d3.select("div#map-svg").append('svg')
  //   .attr('id', 'map')
  //   .attr("width", this.width)
  //   .attr("height", this.height);
  // private projection = d3.geoAlbersUsa()
  //   .translate([this.width/2, this.height/2])
  //   .scale(1000)
  // private path = d3.geoPath().projection(this.projection)
  // private url:string = "https://gist.githubusercontent.com/Bradleykingz/3aa5206b6819a3c38b5d73cb814ed470/raw/a476b9098ba0244718b496697c5b350460d32f99/us-states.json"

  constructor(private friendsService:FriendsService) { }

  getStateFeatures(uState){
    return uState.features
  }
  getStateName(uState, i){
    return uState.features[i].properties.name
  }

  ngOnInit(): void {
    let width = 900;
    let height = 600;
    let svg = d3.select("div#map-svg").append('svg')
      .attr('id', 'map')
      .attr("width", width)
      .attr("height", height);
    let projection = d3.geoAlbersUsa()
      .translate([width/2, height/2])
      .scale(1000)
    let path = d3.geoPath().projection(projection)
    let url:string = "https://gist.githubusercontent.com/Bradleykingz/3aa5206b6819a3c38b5d73cb814ed470/raw/a476b9098ba0244718b496697c5b350460d32f99/us-states.json"

    d3.json(url)
      .then((uState) => {
        console.log(this.getStateFeatures(uState))
        svg.selectAll('path')
        .data(this.getStateFeatures(uState))
        .enter()
        .append('path')
        .attr('d', path)
        .attr('class', 'state')
        let map = document.getElementById('map')
        for(let i = 0; i < map.childElementCount; i++){
          map.children[i].setAttribute('id',this.getStateName(uState, i))
        }
      })
      .catch((error) => {
        throw error
      })
  }

}
