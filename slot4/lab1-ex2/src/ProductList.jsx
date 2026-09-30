import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductInfo from './ProductInfo';

function ProductList() {
    return (
        <Container fluid className="py-4">

            {/* Tiêu đề */}
            <h1 className="text-center fw-bold mb-5">
                Danh Sách Pizza
            </h1>

            <Row className="g-4 justify-content-center">

                <Col md={4} className="d-flex justify-content-center">
                    <ProductInfo
                        name="Pizza Pepperoni"
                        price="200.000 VNĐ"
                        tag="Pizza"
                        avatar="/pizza1.jpg"
                    />
                </Col>

                <Col md={4} className="d-flex justify-content-center">
                    <ProductInfo
                        name="Pizza Hải Sản"
                        price="120.000 VNĐ"
                        tag="Pizza"
                        avatar="/pizza2.jpg"
                    />
                </Col>

                <Col md={4} className="d-flex justify-content-center">
                    <ProductInfo
                        name="Pizza Rau Củ"
                        price="100.000 VNĐ"
                        tag="Pizza"
                        avatar="/pizza3.jpg"
                    />
                </Col>

            </Row>
        </Container>
    );
}

export default ProductList;