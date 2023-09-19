import { useState } from "react";
import style from "./kontakt.module.scss";
const Kontakt = () => {
  return (
<>

<form>
    <label>Dit Navn <span className={style.red}>*</span></label>
<input type="text" name="fname" required></input>
<label>Email <span className={style.red}>*</span></label>
<input type="email" name="mail" required></input>
<label>Din besked <span className={style.red}>*</span></label>
<textarea required></textarea>
<input type="submit" value="Send"></input>
</form>



</>


  )
  }

export default Kontakt;
