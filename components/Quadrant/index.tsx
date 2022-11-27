/**
 * Quadrant
 */

import css from 'styled-jsx/css';

export default function Quadrant() {
  /** -------- State & Const -------- */

  return (
    <section className="quadrant">
      <div className="quadrant-box xx">
        <div className="box-title">Urgent & Important</div>
        <div className="box-content"></div>
      </div>
      <div className="quadrant-box xy">
        <div className="box-title">Urgent & Unimportant</div>
        <div className="box-content"></div>
      </div>
      <div className="quadrant-box yx">
        <div className="box-title">Unurgent & Important</div>
        <div className="box-content"></div>
      </div>
      <div className="quadrant-box yy">
        <div className="box-title">Unurgent & Unimportant</div>
        <div className="box-content"></div>
      </div>
    </section>
  );
}

const styles = css`
  .quadrant {
    display: grid;
    width: 100%;
    height: 100vh;
  }
`;
