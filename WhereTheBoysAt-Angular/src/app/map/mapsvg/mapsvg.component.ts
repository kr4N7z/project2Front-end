import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'
import { FriendsService } from 'src/app/services/friends.service';
import { Observable } from 'rxjs';
import { Friend } from 'src/app/models/friend';


@Component({
  selector: 'app-mapsvg',
  templateUrl: './mapsvg.component.html',
  styleUrls: ['./mapsvg.component.css']
})
export class MapsvgComponent implements OnInit {

  constructor(private friendsService:FriendsService) { }

  private friends:Friend[] = []
  private states:Object = {}
  private colorScale = d3.scaleLinear()
      .domain([0, 5])
      .range(["#66FFFD", "#2D0080"]);

  getAllFriends(url,svg,path){
    this.friendsService.getAllFriends().subscribe(
      data => {
        this.friends = data;
        this.getFriendsByState()
        this.createMap(url,svg,path)
      },
      () => {
        console.log("Something went wrong! Can't fetch friends!")
      }
    )
  }

  createMap(url, svg, path){
    d3.json(url)
      .then((uState) => {
        let data = this.getStateFeatures(uState)
        let colorScale = d3.scaleLinear()
          .domain([0, 5])
          .range(["#66FFFD", "#2D0080"])
        svg.selectAll('path')
          .data(data)
          .enter()
          .append('path')
          .attr('d', path)
          .attr('class', 'state')
          .attr('id', (d) => {
            return this.getStateName(d)
          })
          // .style('fill', (d) => {
          //   let uRate = this.states[this.getStateName(d)].keys().length()
          //   return uRate ? colorScale(uRate) : "#ccc";
          // })
      })
      .catch((error) => {
        throw error
      })
  }
  getStateFeatures(uState){
    return uState.features
  }
  //Used to get State name and assign as ID in SVG elements and adds States to state Object
  getStateName(uStateFeature){
    this.states[uStateFeature.properties.name] = {}
    return uStateFeature.properties.name
  }
  //Fills State object with friends by state
  getFriendsByState(){
    for(let i = 0; i < this.friends.length; i++){
      this.states[this.friends[i].$lastState][this.friends[i].$userId] = 
        this.friends[i].$firstName + " " + this.friends[i].$lastName
    }
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

    this.createMap(url, svg, path)
  }
}
