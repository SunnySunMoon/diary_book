/**
 * Quadrant
 */

import { useMemo } from 'react';
import css from 'styled-jsx/css';
import { MockRecordList } from '../../mock/data';
import { QuadrantEnum } from '../../types/data';

export default function Quadrant() {
  /** -------- State & Const -------- */
  const xx = MockRecordList.filter(
    item => item.quadrant === QuadrantEnum.UrgentAndImportant
  );
  const xy = MockRecordList.filter(
    item => item.quadrant === QuadrantEnum.UrgentButUnimportant
  );
  const yx = MockRecordList.filter(
    item => item.quadrant === QuadrantEnum.NotUrgentButImportant
  );
  const yy = MockRecordList.filter(
    item => item.quadrant === QuadrantEnum.NotUrgentAndUnimportant
  );

  return (
    <section className="quadrant">
      <div className="quadrant-box xx">
        <div className="box-title">Urgent & Important</div>
        <div className="box-content">
          {xx.map(item => (
            <div className="record-item" key={item.id}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
      <div className="quadrant-box xy">
        <div className="box-title">Urgent & Unimportant</div>
        <div className="box-content">
          {xy.map(item => (
            <div className="record-item" key={item.id}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
      <div className="quadrant-box yx">
        <div className="box-title">Unurgent & Important</div>
        <div className="box-content">
          {yx.map(item => (
            <div className="record-item" key={item.id}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
      <div className="quadrant-box yy">
        <div className="box-title">Unurgent & Unimportant</div>
        <div className="box-content">
          {yy.map(item => (
            <div className="record-item" key={item.id}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{styles}</style>
    </section>
  );
}

const styles = css`
  .quadrant {
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    row-gap: 16px;
    column-gap: 16px;
  }
  .quadrant-box {
    border: 1px solid lightblue;
  }
`;
