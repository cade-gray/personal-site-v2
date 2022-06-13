var dob = new Date("06/06/1998");
var ageDT = new Date(Date.now() - dob.getTime());
var age = Math.abs(ageDT.getUTCFullYear() - 1970);
module.exports = {
  bioText: `${age} year old from East Tennessee with experience in multiple facets of the I.T field.  Graduated from Radford University with Bachelor of Science degree in Information Science and Systems with a concentration in Web Development. Skills include but are not limited to: Full Stack JavaScript development, SQL and Database management with SQL Server and Oracle, Microsoft SCCM and application of both computer science and information technology concepts in a financial industry context.`,
};
