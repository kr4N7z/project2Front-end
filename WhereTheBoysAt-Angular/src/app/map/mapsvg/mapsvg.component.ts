import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'
import { FriendsService } from 'src/app/services/friends.service';
import { Observable } from 'rxjs';
import { Friend } from 'src/app/models/friend';
import { color } from 'd3';


@Component({
  selector: 'app-mapsvg',
  templateUrl: './mapsvg.component.html',
  styleUrls: ['./mapsvg.component.css']
})
export class MapsvgComponent implements OnInit {

  constructor(private friendsService:FriendsService) { }

  private friends:Friend[] = [new Friend(1,"standard","email@email.com","secret","Terrance","Lewis",100,100,"Indiana"),
                              new Friend(2,"standard","amazon@email.com","secret","Jeff","Bezos",100,100,"California"),
                              new Friend(3,"standard","email@email.com","secret","Steve","Lewis",100,100,"Indiana"),
                              new Friend(4,"standard","email@email.com","secret","Ryan","Lewis",100,100,"Arkansas"),
                              new Friend(5,"standard","email@email.com","secret","Cameron","Lewis",100,100,"Idaho"),
                              new Friend(6,"standard","email@email.com","secret","Mason","Lewis",100,100,"Indiana"),
                              new Friend(7,"standard","email@email.com","secret","Jon","Lewis",100,100,"California"),
                              new Friend(8,"standard","email@email.com","secret","Bert","Lewis",100,100,"Washington"),
                              new Friend(9,"standard","email@email.com","secret","Ernie","Lewis",100,100,"Indiana"),
                              new Friend(10,"standard","email@email.com","secret","Ernie","Lewis",100,100,"Indiana"),
                              new Friend(11,"standard","email@email.com","secret","Ernie","Lewis",100,100,"Indiana"),
                              new Friend(12,"standard","email@email.com","secret","Ernie","Lewis",100,100,"California"),
                              new Friend(13,"standard","email@email.com","secret","Ernie","Lewis",100,100,"California"),
                              new Friend(14,"standard","email@email.com","secret","Ernie","Lewis",100,100,"Arkansas"),
                              new Friend(15,"standard","email@email.com","secret","Ernie","Lewis",100,100,"Arkansas"),
                              new Friend(16,"standard","email@email.com","secret","Ernie","Lewis",100,100,"Indiana"),
                              new Friend(17,"standard","email@email.com","secret","Ernie","Lewis",100,100,"Indiana"),
                              new Friend(18,"standard","email@email.com","secret","Ernie","Lewis",100,100,"Indiana"),
                              new Friend(19,"standard","email@email.com","secret","Ernie","Lewis",100,100,"Maine"),
                              new Friend(20,"standard","email@email.com","secret","Ernie","Lewis",100,100,"Florida"),
                              new Friend(21,"standard","email@email.com","secret","Ernie","Lewis",100,100,"Florida"),
                              new Friend(22,"standard","email@email.com","secret","Ernie","Lewis",100,100,"Florida"),
                              new Friend(23,"standard","email@email.com","secret","Ernie","Lewis",100,100,"Colorado")]
  private states:Object = {}

  //Determines the State with Most and Least Friends and returns an array for scaling colors
  max(){
    let arr = []
    for(let state in this.states){
      arr.push(Object.keys(this.states[state]).length)
    }
    return  d3.max(arr)
  }
  min(){
    let arr = []
    for(let state in this.states){
      arr.push(Object.keys(this.states[state]).length)
    }
    return  d3.min(arr)
  }
  legendArrayCreation(){
    let arr = []
    for(let i = 0; i <= 5; i++){ 
      arr.push(this.max()-((i/5)*9))
    }
    console.log(arr)
    return arr
  }

  getStateFeatures(uState){
    return uState.features
  }
  //Used to get State name and assign as ID in SVG elements and adds States to state Object
  getStateName(uStateFeature){
    if(!(uStateFeature.properties.name in this.states)){
      this.states[uStateFeature.properties.name] = {}
    }
    return uStateFeature.properties.name
  }
  //Fills State object with friends by state
  getFriendsByState(){
    for(let i = 0; i < this.friends.length; i++){
      let userId = this.friends[i].$userId
      let name  = this.friends[i].$firstName + " " + this.friends[i].$lastName
      let userObj = {}
      userObj[userId] = name
      if(this.states[this.friends[i].$lastState]){
        this.states[this.friends[i].$lastState][userId] = name
      }else{
        this.states[this.friends[i].$lastState] = userObj
      }
    }
  }

  getAllFriends(url,svg,path){
    this.friendsService.getAllFriends().subscribe(
      data => {
        this.friends = data;
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
          .domain([this.min(),this.max()])
          .range(["#E3D2B5","#4B3E33"])
        const legend = d3.select(".map-component").append('svg')
            .attr('class', 'legend')
            .attr('width', 100)
            .attr('height', 150)
            .selectAll('g')
            .data(this.legendArrayCreation())
            .enter().append('g')
            .attr("transform", function(d, i) { 
              return "translate(0," + i * 18 + ")"; });
        legend.append("rect")
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", colorScale);
        legend.append("text")
            .attr("id","text")
            .attr("x", 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .text((d) => { 
               return  Math.round(d) 
            });
        svg.selectAll('path')
          .data(data)
          .enter()
          .append('path')
          .attr('d', path)
          .attr('class', 'state')
          .attr('id', (d) => {
            return this.getStateName(d)
          })
          .style('fill', (d) => {
            let arr = Object.keys(this.states[d.properties.name])
            let uRate = arr.length
            return uRate ? colorScale(uRate) : "#fff0cf";
          })
      })
      .catch((error) => {
        throw error
      })
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
    this.getFriendsByState()
    this.createMap(url, svg, path)
  }
}
