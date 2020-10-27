import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private width = 900;
  private height = 600;
  private svg = d3.select("div#map-svg").append('svg')
    .attr("width", this.width)
    .attr("height", this.height);
  private projection = d3.geoAlbersUsa()
    .translate([this.width/2, this.height/2])
    .scale(1000)
  private path = d3.geoPath().projection(this.projection)
  private url:string = "https://gist.githubusercontent.com/Bradleykingz/3aa5206b6819a3c38b5d73cb814ed470/raw/a476b9098ba0244718b496697c5b350460d32f99/us-states.json"
  
  constructor() { }

  ngOnInit(): void {
    d3.json(this.url)
      .then((uState) => {
        console.log(uState.features)
        this.svg.selectAll('path')
        .data(uState.features)
        .enter()
        .append('path')
        .attr('d', this.path)
        .attr('class', 'state')
      })
      .catch((error) => {
        throw error
      })
    }
  }

