export default function createIteratorObject(report) {
  const workers = [];
  // eslint-disable-next-line
	for (const dprt of Object.keys(report.allEmployees)) {
    // eslint-disable-next-line
		for (const emp of report.allEmployees[dprt]) {
      workers.push(emp);
    }
  }

  return workers;
}
