import React from "react";
import {Link} from "react-router-dom";
let AddPg=()=>{
    return(
    <>
    <section className="add-pg p-3">
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="h4 text-dark">List PG</p>
                    <p className="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos ad architecto iure, earum deserunt natus! Deserunt modi, magnam reiciendis sapiente dolor consequuntur nam quam, voluptate eum, ad omnis! Deserunt, adipisci.</p>
                </div>
            </div>
            <div className="row">
                <div className="col md-4">
                    <form>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Property Name"/>
                        </div>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Property Address"/>
                        </div>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Property Facilities"/>
                        </div>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Owner Name"/>
                        </div>
                        <div className="mb-2">
                            <input type="email" className="form-control" placeholder="Owner Email"/>
                        </div>
                        <div className="mb-2">
                            <input type="number" className="form-control" placeholder="Owner Contact Number"/>
                        </div>
                        <div className="mb-2">
                            <input type="submit" className="btn btn-primary" value="Create"/>
                            <Link to={"/pg/list"} className="btn btn-dark ms-2">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
    )
};
export default AddPg;