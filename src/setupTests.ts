import { TextEncoder, TextDecoder } from 'util';

Object.assign(global, { TextEncoder, TextDecoder });

import '@testing-library/jest-dom';
import './i18n/i18n';
