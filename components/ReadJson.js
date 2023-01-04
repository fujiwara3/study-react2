import React from 'react';
import Code from 'next/image';



export const ReadJson = () =>{

    /** jsonデータ編集 */
    const cdList = [];
    for (var cdNo in Code) {
        for (var cd in Code[cdNo]) {
            const cdStr = <div>
                               {cdNo + '-' + cd + '-' + Code[cdNo][cd]}
                          </div>;
            cdList.push(cdStr);
        }
    }

    /** レンダー部分 */
    return (
        <>{cdList}</>
    );
};
