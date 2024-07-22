function TableRow({ index, firstName, lastName, jobTitle, email, image }) {
    // Classe conditionnelle basée sur l'index
    const rowClass = index % 2 === 0 ? "bg-gray-500" : "bg-gray-400";
  
    return (
      <tr className={`text-white h-32 transform scale-100 hover:scale-105 transition-transform relative ${rowClass}`}>
        <td className="w-44 flex justify-center py-3 "><img src={image} alt="profile" className="w-auto h-full rounded-md"/></td>
        <td>{firstName} {lastName}</td>
        <td className="italic">{jobTitle}</td>
        <td>{email}</td>
      </tr>
    );
  }
  export default TableRow;