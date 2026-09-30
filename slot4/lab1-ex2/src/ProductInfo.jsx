import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function ProductInfo({ name, price, tag, avatar }) {
  return (
    <Card
      style={{
        width: '260px',
        border: 'none',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 3px 12px rgba(0, 0, 0, 0.12)'
      }}
    >
      <Card.Img
        variant="top"
        src={avatar}
        alt={name}
        style={{
          height: '150px',
          objectFit: 'cover'
        }}
      />

      <Card.Body className="text-center">
        <Card.Title className="fw-bold">
          {name}
        </Card.Title>

        <Card.Text>
          Price: <strong>{price}</strong>
        </Card.Text>

        <Badge
          bg="primary"
          pill
          className="px-3 py-2"
        >
          {tag}
        </Badge>

        <Button
          variant="primary"
          size="sm"
          className="w-100 mt-3"
        >
          Buy Now
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductInfo;