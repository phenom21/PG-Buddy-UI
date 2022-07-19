import React from "react";
import { Link } from "react-router-dom";

let PgList=()=>{
    return(
    <>
    <section className="pg-search p-3">
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="col">
                        <p className="h3">PG Buddy
                        <Link to={"/pg/add"} className="btn btn-outline-primary ms-3">
                            List PG
                            <i className="fa fa-plus-circle me-2"/>
                        </Link>
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa numquam aperiam neque vero alias laboriosam aliquam itaque eligendi, non autem laudantium ut odit soluta accusamus molestias dolores repellendus vel. Autem!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Seach PG here"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-2">
                            <input type="submit" className="btn btn-primary" value="Search"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="pg-list">
        <div className="container">
            <div className="row mt-4">
                <div className="col md-4">
                            <div className="card" style={{ width: '21rem',height:"25rem"}}>
                                <img variant="top" style={{ width: '21rem',height:"15rem" }} src="/pg1.jpg" />
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4>PG1</h4>
                                    </div>
                                    <div className="card-text mb-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    </div>
                                    {/* <input type="submit" className="btn btn-outline-primary"/> */}
                                    <Link to="/pg/view/:pgid" className="btn btn-outline-primary">
                                        Explore
                                    </Link>
                                </div>
                            </div>
                </div>
                <div className="col md-4">
                            <div className="card" style={{ width: '21rem' ,height:"25rem"}}>
                                <img variant="top" style={{ width: '21rem',height:"14rem" }} src="/pg10.jpg" />
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4>PG2</h4>
                                    </div>
                                    <div className="card-text mb-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    </div>
                                    {/* <input type="submit" className="btn btn-outline-primary"/> */}
                                    <Link to="/pg/view/:pgid" className="btn btn-outline-primary">
                                        Explore
                                    </Link>
                                </div>
                            </div>
                </div>
                <div className="col md-4">
                            <div className="card" style={{ width: '21rem',height:"25rem" }}>
                                <img variant="top" style={{ width: '21rem',height:"14rem" }} src="/pg3.jpg" />
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4>PG3</h4>
                                    </div>
                                    <div className="card-text mb-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    </div>
                                    {/* <input type="submit" className="btn btn-outline-primary"/> */}
                                    <Link to="/pg/view/:pgid" className="btn btn-outline-primary">
                                        Explore
                                    </Link>
                                </div>
                            </div>
                </div> 
            </div>
            <div className="row mt-5">
                <div className="col md-4">
                            <div className="card" style={{ width: '21rem',height:"25rem" }}>
                                <img variant="top" style={{ width: '21rem',height:"15rem" }} src="/pg4.jpg" />
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4>PG4</h4>
                                    </div>
                                    <div className="card-text mb-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    </div>
                                    {/* <input type="submit" className="btn btn-outline-primary"/> */}
                                    <Link to="/pg/view/:pgid" className="btn btn-outline-primary">
                                        Explore
                                    </Link>
                                </div>
                            </div>
                </div>
                <div className="col md-4">
                            <div className="card" style={{ width: '21rem',height:"25rem" }}>
                                <img variant="top" style={{ width: '21rem',height:"15rem" }} src="/pg5.jpg" />
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4>PG5</h4>
                                    </div>
                                    <div className="card-text mb-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    </div>
                                    {/* <input type="submit" className="btn btn-outline-primary"/> */}
                                    <Link to="/pg/view/:pgid" className="btn btn-outline-primary">
                                        Explore
                                    </Link>
                                </div>
                            </div>
                </div>
                <div className="col md-4">
                            <div className="card" style={{ width: '21rem',height:"25rem" }}>
                                <img variant="top" style={{ width: '21rem',height:"15rem" }} src="/pg6.jpg" />
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4>PG6</h4>
                                    </div>
                                    <div className="card-text mb-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    </div>
                                    {/* <input type="submit" className="btn btn-outline-primary"/> */}
                                    <Link to="/pg/view/:pgid" className="btn btn-outline-primary">
                                        Explore
                                    </Link>
                                </div>
                            </div>
                </div> 
            </div>
            <div className="row mt-5 mb-5">
                <div className="col md-4">
                            <div className="card" style={{ width: '21rem',height:"25rem" }}>
                                <img variant="top" style={{ width: '21rem',height:"15rem" }} src="/pg7.jpg" />
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4>PG1</h4>
                                    </div>
                                    <div className="card-text mb-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    </div>
                                    {/* <input type="submit" className="btn btn-outline-primary"/> */}
                                    <Link to="/pg/view/:pgid" className="btn btn-outline-primary">
                                        Explore
                                    </Link>
                                </div>
                            </div>
                </div>
                <div className="col md-4">
                            <div className="card" style={{ width: '21rem',height:"25rem" }}>
                                <img variant="top" style={{ width: '21rem',height:"15rem" }} src="/pg8.jpg" />
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4>PG1</h4>
                                    </div>
                                    <div className="card-text mb-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    </div>
                                    {/* <input type="submit" className="btn btn-outline-primary"/> */}
                                    <Link to="/pg/view/:pgid" className="btn btn-outline-primary">
                                        Explore
                                    </Link>
                                </div>
                            </div>
                </div>
                <div className="col md-4">
                            <div className="card" style={{ width: '21rem' ,height:"25rem"}}>
                                <img variant="top" style={{ width: '21rem',height:"15rem" }} src="/pg9.jpg" />
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4>PG1</h4>
                                    </div>
                                    <div className="card-text mb-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    </div>
                                    {/* <input type="submit" className="btn btn-outline-primary"/> */}
                                    <Link to="/pg/view/:pgid" className="btn btn-outline-primary">
                                        Explore
                                    </Link>
                                </div>
                            </div>
                </div> 
            </div>
        </div>
    </section>
    </>
    )
};
export default PgList;