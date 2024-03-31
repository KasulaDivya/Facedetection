import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Item header={"header"} key="0">

        <h1>helo world</h1>
        <h1>helo world</h1>
        <h3>1</h3>
      </Item>

      <Item header={"header1"} key="1">

<h1>Help</h1>
<h1>Account setting</h1>
<h3>2</h3>

</Item>
   
    
    </Accordion>
  );
}

export default BasicExample;


const Item=(props)=>{
  console.log(props)
  const{header,children}=props
  return(
    <Accordion.Item eventKey={children[2]}>
<Accordion.Header>{header}</Accordion.Header>
<Accordion.Body>
  {children}
</Accordion.Body>
</Accordion.Item>

  )
}
