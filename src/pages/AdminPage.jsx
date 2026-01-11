import BuildingForm from '../components/ControlledForm'

function AdminPage() {

    return (
        <div className="page-container w-full max-w-7xl mx-auto px-4">
            <h1 className='contenedor_h1'>Panel de Administración</h1>
            <p className="contenedor_p" style={{ textAlign: 'center' }}>Gestiona el catálogo de edificios desde aquí.</p>

            <BuildingForm />
        </div>
    )

}

export default AdminPage