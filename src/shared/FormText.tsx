

const FormText = ({children}: {children: string}) => {
    return <span style={{fontFamily: 'Montserrat', color: '#5D5175', width: '100%', fontSize: '13px', justifyContent: 'center', display: 'flex'}}>
        {children}
    </span>
}

export default FormText