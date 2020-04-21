import React, { useRef, useEffect } from 'react';
import { select, arc } from 'd3';

const Face = () => {
  const width = 960;
  const height = 500;
  const eyeSpacing = 100;
  const eyeYOffset = 70;
  const eyeRadius = 30;
  const eyebrowWidth = 50;
  const eyebrowHeight = 15;

  const isCurrent = useRef(true);

  useEffect(() => {
    const g = select('svg').append('g');
    g.attr('transform', `translate(${width / 2}, ${height / 2})`);

    const circle = g
      .append('circle')
      .attr('r', height / 2)
      .attr('fill', 'yellow')
      .attr('stroke', 'black');

    const eyesG = g
      .append('g')
      .attr('transform', `translate(0, ${-eyeYOffset})`);

    const leftEye = eyesG
      .append('circle')
      .attr('r', eyeRadius)
      .attr('cx', -eyeSpacing);

    const rightEye = eyesG
      .append('circle')
      .attr('r', eyeRadius)
      .attr('cx', +eyeSpacing);

    const eyebrowsG = eyesG.append('g').attr('transform', `translate(0, -70)`);

    const leftEyebrow = eyebrowsG
      .append('rect')
      .attr('width', eyebrowWidth)
      .attr('height', eyebrowHeight)
      .attr('x', -eyeSpacing - eyebrowWidth / 2);

    const rightEyebrow = eyebrowsG
      .append('rect')
      .attr('width', eyebrowWidth)
      .attr('height', eyebrowHeight)
      .attr('x', +eyeSpacing - eyebrowWidth / 2);

    eyebrowsG
      .transition()
      .duration(2000)
      .attr('transform', `translate(0, -100)`)
      .transition()
      .duration(2000)
      .attr('transform', `translate(0, -70)`);

    const mouth = g.append('path').attr(
      'd',
      arc()({
        innerRadius: 150,
        outerRadius: 170,
        startAngle: Math.PI / 2,
        endAngle: (Math.PI * 3) / 2
      })
    );

    return () => {
      isCurrent.current = false;
    };
  }, []);

  return isCurrent.current ? (
    <div>
      <svg width={width} height={height}></svg>
    </div>
  ) : null;
};

export default Face;
