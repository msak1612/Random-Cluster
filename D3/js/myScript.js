d3.csv("https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv", d3.autoType)
  .then(function(data){

    var mySVG = d3.select("svg").on("mouseover", moveCircles);
    var circles = mySVG.selectAll("circle").data(data);
   
    // Binding data 
    circles.enter()
        .append("circle")
        .attr("cx",function(d){return d.Xi;})
        .attr("cy",function(d){return d.Yi;})
        .attr("r", 5)
        .style("fill", function(d){return d.color;})
        .on("mouseover", mouseOver)
        .on("mouseout", mouseOut) 
        .transition().ease(d3.easeBounce)
        .duration(2000).delay(500)
        .attr("cx",function(d){return d.Xf;})
        .attr("cy",function(d){return d.Yf;});
        
    
    // On Mouseover, circles are transitioning to different coordiates
    function moveCircles(event) {
        d3.selectAll('circle').each(function(d,i){
            d3.select(this).transition().ease(d3.easeBounce)
            .duration(2000).delay(500)
            .attr('cx', function(){return (Math.random()-0.5)*50 + data[i].Xf;})
            .attr('cy', function(){return (Math.random()-0.5)*50 + data[i].Yf;});
        })
    } 

    // Circles are expanding to different size
    function mouseOver(event){
        d3.select(this).transition().ease(d3.easeBounce)
        .duration(1000)
        .attr('r', 15);
    }
    
    // Circles are transitioning to original size
    function mouseOut(event){
        d3.select(this).transition().ease(d3.easeBounce)
        .duration(1000)
        .attr('r', 5);
    }  
})




