import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'react-chartjs-2';

Chart.pluginService.register({
  beforeDraw: function(chart) {
    if (chart.config.options.elements.center) {
      //Get ctx from string
      var ctx = chart.chart.ctx;

      //Get options from the center object in options
      var centerConfig = chart.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || 'Arial';
      var txt = centerConfig.text;
      var color = centerConfig.color || '#000';
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated = sidePadding / 100 * (chart.innerRadius * 2);
      //Start with a base font of 30px
      ctx.font = '30px ' + fontStyle;

      //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(15 * widthRatio);
      var elementHeight = chart.innerRadius * 2;

      // Pick a new font size so it will not be larger than the height of label.
      var fontSizeToUse = Math.min(newFontSize, elementHeight);

      //Set font settings to draw it correctly.
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 1.25;
      ctx.font = fontSizeToUse + 'px ' + fontStyle;
      ctx.fillStyle = color;

      //Draw text in center
      ctx.fillText(txt, centerX, centerY);
    }
  }
});

export default class Gauge extends React.Component {
  render() {
    return (
      <div className='gauge-container'>
        <h2>{this.props.title}</h2>
        <Doughnut 
          data={this.props.data}
          options={{
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            legend: {
              display: false,
              position:"bottom",
              fmaintainAspectRatio:false,
            },
            elements: {
              center: {
                text: `${Math.floor(this.props.data.datasets[0].data[1],1)}${this.props.units}` ,
                color: '#ffffff', // Default is #000000
                fontStyle: 'Arial', // Default is Arial
                sidePadding: 1 // Defualt is 20 (as a percentage)
              }
            }
          }}
        />
      </div>
    );
  }
}