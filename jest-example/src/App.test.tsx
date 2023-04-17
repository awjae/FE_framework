import React from 'react';
import { render, screen } from '@testing-library/react';
import App, { add, Login } from './App';
import * as ReactDOM from 'react-dom';

test('renders learn react link', () => {
  // 준비(Arrange): 테스트 환경과 컴포넌트 렌더링을 준비합니다.
  render(<App />);

  // 실행(Act): 예상되는 링크를 찾습니다.
  const linkElement = screen.getByText(/learn react/i);

  // 검증(Assert): 문서에 필요한 링크가 있는지 확인합니다.
  expect(linkElement).toBeInTheDocument();
});

describe('add function', () => {
  describe('when given to integers', () => {
    it('should return a add result', () => {
      // 준비(Arrange): 예상되는 덧셈 결과와 함수 인수를 준비합니다.
      // 이 예시에서는 5 + 8이 13이 된다는 결과를 예측합니다.
      const [a, b, expected] = [5, 8, 13];

      // 여기서는, 배열 비구조화를 활용하여 "a === 5," "b === 8," 과 "expected === 13"과 같이 할당합니다.

      // 실행(Act): 참인 함수 결과를 얻기위해 add 함수를 사용합니다.
      const result = add(a, b);

      // 검증(Assert): 이제 함수의 출력과 예상 결과를 비교합니다.
      expect(result).toEqual(expected);
    });
  });
});

describe('Login component tests', () => {
  let container: HTMLDivElement;

  // beforeEach: 이 파일의 각 테스트가 실행되기 전에 이 함수를 실행합니다. 함수가 promise를 반환하거나 생성자인 경우, jest는 테스트를 실행하기 전에 해당 promise가 해결될 때까지 기다립니다.
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Login />, container);
  });

  // 테스트가 서로 방해되지 않도록 마지막에 모든 것을 초기화합니다.
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  // 각 입력 필드를 렌더링하기 위한 테스트를 실행합니다.
  it('Renders all input fields correctly', () => {
    // 입력 필드를 선택합니다.
    const inputs = container.querySelectorAll('input');
    // 입력 필드가 올바르게 렌더링되었는지 확인합니다.
    expect(inputs).toHaveLength(2);

    // 첫 번째 입력 필드 및 두 번째 입력 필드를 각각 "이메일" 및 "암호"인지 확인합니다.
    expect(inputs[0].name).toBe('email');
    expect(inputs[1].name).toBe('password');
  });

  // 각 버튼을 렌더링하기 위한 테스트를 실행합니다.
  it('Renders all buttons correctly', () => {
    const buttons = container.querySelectorAll('button');
    expect(buttons).toHaveLength(2);

    expect(buttons[0].type).toBe('button');
    expect(buttons[1].type).toBe('button');
  });
});