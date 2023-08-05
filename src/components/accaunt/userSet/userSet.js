import React, {useState} from 'react';

const UserSet = () => {
    const [lang, setLang] = useState(false)
    const [cur, setCur] = useState(false)
    const [select, setSelect] = useState("English")
    const [curSel, setCurSel] = useState("$ - USD")
    return (
        <div className="userSet">
            <h1>Site Setting</h1>
            <div className="userSet--lan">
                <div className="userSet--lan__first">
                    <h6>Language</h6>
<div className="userSet--lan__first--lang" style={{
    display:lang ? "block" : "none"
}}>
    <select name="language" onChange={(e)=>setSelect(e.target.value)} >
        <option value="English">English</option>
        <option value="Русский">Русский</option>
        <option value="عربي">عربي</option>
        <option value="中文">中文</option>
    </select>
</div>
                    <p style={{
                        display:lang? "none": "block"
                    }}>{select}</p>
                </div>
                <p className="userSet--lan__p" onClick={()=>{
                    setLang(!lang)
                }}>{lang? "Cancel" : "Edit"}</p>
            </div>
            <div className="userSet--currency">
                <div className="userSet--currency__first">
                    <h6>Currency</h6>
                    <div className="userSet--currency__first--select" style={{
                        display: cur? "block" : "none"
                    }}>
                        <select name="currency" onChange={(e)=>setCurSel(e.target.value)} >
                            <option value="$ - USD">$ - USD</option>
                            <option value="C - KGZ">C - KGZ</option>
                        </select>
                    </div>
                    <p style={{
                        display:cur ? "none" :"block"
                    }}>{curSel}</p>
                </div>
                <p className="userSet--currency__p" onClick={()=>{
                    setCur(!cur)
                }}>{cur ? "Cancel" : "Edit"}</p>
            </div>

        </div>
    );
};

export default UserSet;