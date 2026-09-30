import React, { useReducer } from 'react';
import { Card, Button, Form, ListGroup, Container } from 'react-bootstrap';

const MIN = 0;
const MAX = 100;

// 1. Khai báo hằng số action để tránh gõ sai tên
const ACTIONS = {
  INCREMENT: 'counter/increment',
  DECREMENT: 'counter/decrement',
  SET_STEP: 'counter/setStep',
  RESET: 'counter/reset',
};

// 2. Khai báo state ban đầu
const initialState = { count: 0, step: 1, history: [] };

// Hàm kẹp giá trị trong khoảng 0 - 100
const clamp = (n) => Math.min(MAX, Math.max(MIN, n));

// 3. Viết reducer thuần
const counterReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
    case ACTIONS.DECREMENT: {
      const delta = action.type === ACTIONS.INCREMENT ? state.step : -state.step;
      const next = clamp(state.count + delta);
      
      // Nếu chạm giới hạn (không đổi giá trị), trả về state cũ để React bỏ qua render
      if (next === state.count) return state; 
      
      return {
        ...state,
        count: next,
        // Thêm vào đầu mảng và cắt giữ lại đúng 5 phần tử
        history: [`${state.count} → ${next}`, ...state.history].slice(0, 5),
      };
    }
    case ACTIONS.SET_STEP:
      return { ...state, step: action.payload };
    case ACTIONS.RESET:
      return initialState;
    default:
      throw new Error(`Action không hợp lệ: ${action.type}`);
  }
};

const StepCounter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const { count, step, history } = state;

  return (
    <Container className="mt-4">
      <Card style={{ maxWidth: 420, margin: '0 auto' }} className="shadow-sm">
        <Card.Body>
          <Card.Title className="text-center mb-2">Bộ đếm có bước nhảy</Card.Title>
          <div className="display-4 text-center my-4 fw-bold">{count}</div>

          <div className="d-flex gap-2 justify-content-center mb-4">
            <Button
              variant="outline-secondary"
              disabled={count <= MIN}
              onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
            >
              {`− ${step}`}
            </Button>
            <Button 
              disabled={count >= MAX} 
              onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
            >
              {`+ ${step}`}
            </Button>
            <Button 
              variant="outline-danger" 
              onClick={() => dispatch({ type: ACTIONS.RESET })}
            >
              Đặt lại
            </Button>
          </div>

          <Form.Group className="mb-4" controlId="step-select">
            <Form.Label className="fw-semibold">Bước nhảy</Form.Label>
            <Form.Select
              value={step}
              // Ép kiểu Number vì e.target.value luôn là chuỗi
              onChange={(e) => dispatch({ type: ACTIONS.SET_STEP, payload: Number(e.target.value) })}
            >
              {[1, 5, 10, 25].map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <h6 className="fw-semibold mb-3">5 thay đổi gần nhất</h6>
          <ListGroup variant="flush" className="border rounded">
            {history.length === 0 && (
              <ListGroup.Item className="text-muted text-center py-3">
                Chưa có thay đổi
              </ListGroup.Item>
            )}
            {history.map((line, i) => (
              <ListGroup.Item key={`${line}-${i}`}>
                {line}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default StepCounter;