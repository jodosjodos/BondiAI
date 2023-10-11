
function TwoLinesWithText() {
  return (
    <svg width="200" height="100">
      {/* Horizontal Line */}
      <line x1="10" y1="50" x2="190" y2="50" stroke="black" strokeWidth="2" />

      {/* Vertical Line (intersecting with the horizontal line) */}
      <line x1="100" y1="10" x2="100" y2="90" stroke="red" strokeWidth="2" />

      {/* Text at the intersection point */}
      <text x="100" y="50" textAnchor="middle" alignmentBaseline="middle" fill="black">
        Intersection
      </text>
    </svg>
  );
}

export default TwoLinesWithText;
