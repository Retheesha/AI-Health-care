
import { Header } from "../../Component/Header"
import { Footer } from "../../Component/Footer"

export const Rpatients_history = () => {





    return (
        <>
            <Header />
            <div className="add-product sidebar-collapse">
                <div className="main">
                    <div className="section ">
                        <div className="container">
                            <h4 className="title"><small></small></h4>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="text-center">S.No</th>
                                            <th> Booked Date</th>
                                            <th>Booked Timing</th>
                                            <th>Patient Name</th>
                                            <th className="text-right">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td className="text-center">1</td>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox" value="" />
                                                        <span className="form-check-sign"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>525</td>
                                            <td>25</td>
                                            <td className="text-right">&euro; 1,225</td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">1</td>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox" value="" />
                                                        <span className="form-check-sign"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>30-09-2024</td>
                                            <td>Narahah</td>
                                            <td className="text-right">&euro; 1,225</td>
                                        </tr>
                                        {/* <tr>
                                            <td className="text-center">2</td>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox" value="" />
                                                        <span className="form-check-sign"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Tuesday</td>
                                            <td>25</td>
                                            <td className="text-right">&euro; 1,225</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">3</td>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox" value="" />
                                                        <span className="form-check-sign"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Wednesday</td>
                                            <td>25</td>
                                            <td className="text-right">&euro; 1,225</td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}
