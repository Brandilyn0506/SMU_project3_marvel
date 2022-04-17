$(document).ready(function() {
    getDataAndPlot();

});

function getDataAndPlot(data) {
    d3.json("data.json", function(error, nodeData) {
        if (error) throw error;
    }

        var root: d3.hierarchy(nodeData)
            .sum(function (d) { return d.size});
        partition(root);
        var arc = d3.arc()
            .startAngle(function (d) { return d.x0 })
            .endAngle(function (d) { return d.x1 })
            .innerRadius(function (d) { return d.y0 })
            .outerRadius(function (d) { return d.y1 });

        g.selectAll('g')  // <-- 1
            .data(root.descendants())
            .enter().append('g').attr("class", "node")  // <-- 2
            .append('path')  // <-- 2
            .attr("display", function (d) { return d.depth ? null : "none"; })
            .attr("d", arc)
            .style('stroke', '#fff')
            .style("fill", function (d) { return color((d.children ? d : d.parent).data.name); });
    
        root.each(d => d.current = d);
    
        var svg: d3.create("svg")
            .attr("viewBox", [0, 0, width, width])
            .style("font", "10px sans-serif");
    
        var g = svg.append("g")
            .attr("transform", `translate(${width / 2},${width / 2})`);
    
        var path = g.append("g")
        .selectAll("path")
        .data(root.descendants().slice(1))
        .join("path")
            .attr("fill", d => { while (d.depth > 1) d = d.alignment; return color(d.data.Name); })
            .attr("fill-opacity", d => arcVisible(d.current) ? (d.Gender ? 0.6 : 0.4) : 0)
            .attr("pointer-events", d => arcVisible(d.current) ? "auto" : "none")
    
            .attr("d", d => arc(d.current));
    
        path.filter(d => d.Gender)
            .style("cursor", "pointer")
            .on("click", clicked);
    
        path.append("title")
            .text(d => `${d.ancestors().map(d => d.data.Name).reverse().join("/")}\n${format(d.value)}`);
    
        var label = g.append("g")
            .attr("pointer-events", "none")
            .attr("text-anchor", "middle")
            .style("user-select", "none")
            .selectAll("text")
            .data(root.descendants().slice(1))
            .join("text")
            .attr("dy", "0.35em")
            .attr("fill-opacity", d => +labelVisible(d.current))
            .attr("transform", d => labelTransform(d.current))
            .text(d => d.data.Name);
    
        var alignment  = g.append("circle")
            .datum(root)
            .attr("r", radius)
            .attr("fill", "none")
            .attr("pointer-events", "all")
            .on("click", clicked);
    
        function clicked(event, p) {
        alignment.datum(p.Alignment || root);
    
        root.each(d => d.target = {
            x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
            x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
            y0: Math.max(0, d.y0 - p.depth),
            y1: Math.max(0, d.y1 - p.depth)
        });
    
        var t = g.transition().duration(750);
    
        path.transition(t)
            .tween("data", d => {
            var i = d3.interpolate(d.current, d.target);
            return t => d.current = i(t);
            })
            .filter(function(d) {
            return +this.getAttribute("fill-opacity") || arcVisible(d.target);
            })
            .attr("fill-opacity", d => arcVisible(d.target) ? (d.Gender ? 0.6 : 0.4) : 0)
            .attr("pointer-events", d => arcVisible(d.target) ? "auto" : "none") 
    
            .attrTween("d", d => () => arc(d.current));
    
        label.filter(function(d) {
            return +this.getAttribute("fill-opacity") || labelVisible(d.target);
        }).transition(t)
            .attr("fill-opacity", d => +labelVisible(d.target))
            .attrTween("transform", d => () => labelTransform(d.current));
        }
        
        function arcVisible(d) {
            return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
        }
    
        function labelVisible(d) {
            return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
        }
    
        function labelTransform(d) {
            var x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
            var y = (d.y0 + d.y1) / 2 * radius;
            return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
        }
    
        return svg.node();
    
        data = FileAttachment("data/bad_male.json").json()

        partition = data => {
            var root = d3.hierarchy(data)
                .sum(d => d.value)
                .sort((a, b) => b.value - a.value);
            return d3.partition()
                .size([2 * Math.PI, root.height + 1])
            (root);
        }
        color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.Gender.length + 1))

        format = d3.format(",d")

        width = 932

        radius = width / 6

        arc = d3.arc()
            .startAngle(d => d.x0)
            .endAngle(d => d.x1)
            .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
            .padRadius(radius * 1.5)
            .innerRadius(d => d.y0 * radius)
            .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1))

}