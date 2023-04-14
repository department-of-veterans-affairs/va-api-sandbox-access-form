"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-nested-callbacks */
/* eslint-disable max-lines */
var react_1 = require("@testing-library/react");
var user_event_1 = __importDefault(require("@testing-library/user-event"));
var react_2 = __importDefault(require("react"));
require("jest");
require("@testing-library/jest-dom/extend-expect");
var __1 = require("..");
var fakeCategories_1 = require("../__mocks__/fakeCategories");
var makeRequest_1 = require("../utils/makeRequest");
var schemas_1 = require("../schemas");
jest.mock('../utils/makeRequest', function () { return (__assign(__assign({}, jest.requireActual('../utils/makeRequest')), { makeRequest: jest.fn() })); });
var acgPkceAuthUrl = '/explore/authorization/docs/authorization-code#pkce-authorization';
var ccgPublicKeyUrl = '/explore/authorization/docs/client-credentials';
var termsOfServiceUrl = '/terms-of-service';
var postUrl = '/platform-backend/v0/consumers/applications';
var mockOnFailure = jest.fn();
var mockOnSuccess = jest.fn();
var mockMakeRequest = makeRequest_1.makeRequest;
var renderComponent = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, react_1.waitFor)(function () { return (0, react_1.cleanup)(); })];
            case 1:
                _a.sent(); // clean up beforeEach render if we're testing a different page
                (0, react_1.render)(react_2.default.createElement(__1.SandboxAccessForm, { apiIdentifier: "", authTypes: [], internalOnly: false, onFailure: mockOnFailure, onSuccess: mockOnSuccess, urls: {
                        acgPkceAuthUrl: acgPkceAuthUrl,
                        ccgPublicKeyUrl: ccgPublicKeyUrl,
                        postUrl: postUrl,
                        termsOfServiceUrl: termsOfServiceUrl,
                    } }));
                return [2 /*return*/];
        }
    });
}); };
var armageddonResetFakeCategories = __assign(__assign({}, fakeCategories_1.fakeCategories), { movies: __assign(__assign({}, fakeCategories_1.fakeCategories.movies), { apis: [
            fakeCategories_1.fakeCategories.movies.apis[0],
            __assign(__assign({}, fakeCategories_1.fakeCategories.movies.apis[1]), { vaInternalOnly: schemas_1.VaInternalOnly.FlagOnly }),
            fakeCategories_1.fakeCategories.movies.apis[2],
        ] }) });
describe('SandboxAccessFormLegacy', function () {
    beforeAll(function () {
        mockOnFailure.mockReset();
        mockOnSuccess.mockReset();
        mockMakeRequest.mockReset();
    });
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            document.querySelectorAll = jest.fn(function () { return [{ focus: jest.fn() }]; });
            return [2 /*return*/];
        });
    }); });
    describe('ouath acg apis', function () {
        it('adds required fields if selected', function () {
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /First name/ }), 'Samwise', {
                delay: 0.01,
            });
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Last name/ }), 'Gamgee', {
                delay: 0.01,
            });
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Email/ }), 'sam@theshire.net', {
                delay: 0.01,
            });
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /^Organization/ }), 'Fellowship', {
                delay: 0.01,
            });
            user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: 'I agree to the terms' }));
            (0, react_1.act)(function () {
                user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /Armageddon API/ }));
            });
            setTimeout(function () {
                expect(react_1.screen.findByRole('radio', { name: 'Yes' })).toBeInTheDocument();
                expect(react_1.screen.findByRole('radio', { name: 'No' })).toBeInTheDocument();
                expect(react_1.screen.findByRole('textbox', { name: /OAuth Redirect URI/ })).toBeInTheDocument();
            }, 0);
        });
        it('loads the OAuthAcgAppInfo component links when an ACG OAuth API is selected', function () {
            expect(react_1.screen.queryByRole('link', { name: /PKCE/ })).not.toBeInTheDocument();
            (0, react_1.act)(function () {
                user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /Armageddon API/ }));
            });
            expect(react_1.screen.getAllByRole('link', { name: /PKCE/ })).toHaveLength(2);
        });
    });
    describe('ouath ccg apis', function () {
        it('adds required fields if selected', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /First name/ }), 'Samwise', {
                            delay: 0.01,
                        });
                        void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Last name/ }), 'Gamgee', {
                            delay: 0.01,
                        });
                        void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Email/ }), 'sam@theshire.net', {
                            delay: 0.01,
                        });
                        void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /^Organization/ }), 'Fellowship', {
                            delay: 0.01,
                        });
                        user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: 'I agree to the terms' }));
                        (0, react_1.act)(function () {
                            user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /Apollo 13 API/ }));
                        });
                        _a = expect;
                        return [4 /*yield*/, react_1.screen.findByRole('textbox', { name: /OAuth public key/ })];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
        it("OAuthAcgAppInfo component doesn't load when a CCG OAuth API is selected", function () {
            expect(react_1.screen.queryByRole('link', { name: /PKCE/ })).not.toBeInTheDocument();
            (0, react_1.act)(function () {
                user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /Apollo 13 API/ }));
            });
            expect(react_1.screen.queryByRole('link', { name: /PKCE/ })).not.toBeInTheDocument();
        });
    });
    describe('description textarea', function () {
        it('should update input on typing', function () { return __awaiter(void 0, void 0, void 0, function () {
            var descriptionTextarea;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        descriptionTextarea = react_1.screen.getByRole('textbox', {
                            name: 'Briefly describe how your organization will use VA APIs:',
                        });
                        void user_event_1.default.type(descriptionTextarea, 'One Ring to rule them all');
                        return [4 /*yield*/, (0, react_1.waitFor)(function () { return expect(descriptionTextarea.value).toBe('One Ring to rule them all'); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('terms of service', function () {
        it('should toggle when clicked', function () {
            var tosCheckbox = react_1.screen.getByRole('checkbox', {
                name: 'I agree to the terms',
            });
            expect(tosCheckbox).toBeInTheDocument();
            expect(tosCheckbox).not.toBeChecked();
            user_event_1.default.click(tosCheckbox);
            expect(tosCheckbox).toBeChecked();
        });
        it('should contain a link to the terms of service page', function () {
            var tosLink = react_1.screen.getByRole('link', { name: 'terms of service' });
            expect(tosLink).toBeInTheDocument();
            expect(tosLink.getAttribute('href')).toBe('/terms-of-service');
        });
    });
    describe('submit button', function () {
        beforeEach(function () {
            mockMakeRequest.mockResolvedValue({
                body: {
                    clientID: 'lord-of-moria',
                    token: 1234,
                },
            });
        });
        it('triggers validation when clicked', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        expect(react_1.screen.queryByRole('button', { name: 'Sending...' })).not.toBeInTheDocument();
                        void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /First name/ }), 'Peregrin', {
                            delay: 0.01,
                        });
                        void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Last name/ }), 'Took', {
                            delay: 0.01,
                        });
                        void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Email/ }), 'pippin@theshire', {
                            delay: 0.01,
                        });
                        void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /^Organization/ }), 'Fellowship', {
                            delay: 0.01,
                        });
                        user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /Rings API/ }));
                        user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: 'I agree to the terms' }));
                        (0, react_1.act)(function () {
                            user_event_1.default.click(react_1.screen.getByRole('button', { name: 'Submit' }));
                        });
                        _a = expect;
                        return [4 /*yield*/, react_1.screen.findByText('Enter a valid email address.')];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
        it('validates oauth fields when clicked', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /First name/ }), 'Peregrin', {
                            delay: 0.01,
                        });
                        void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Last name/ }), 'Took', {
                            delay: 0.01,
                        });
                        void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Email/ }), 'pippin@theshire.com', {
                            delay: 0.01,
                        });
                        void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /^Organization/ }), 'Fellowship', {
                            delay: 0.01,
                        });
                        user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /Armageddon API/ }));
                        user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: 'I agree to the terms' }));
                        (0, react_1.act)(function () {
                            user_event_1.default.click(react_1.screen.getByRole('button', { name: 'Submit' }));
                        });
                        _a = expect;
                        return [4 /*yield*/, react_1.screen.findByText('Choose an option.')];
                    case 1:
                        _a.apply(void 0, [_c.sent()]).toBeInTheDocument();
                        _b = expect;
                        return [4 /*yield*/, react_1.screen.findByText('Enter an http or https URI.')];
                    case 2:
                        _b.apply(void 0, [_c.sent()]).toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
        it('validates internal api fields when selected', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /First name/ }), 'Peregrin', {
                            delay: 0.01,
                        });
                        void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Last name/ }), 'Took', {
                            delay: 0.01,
                        });
                        void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Email/ }), 'pippin@theshire.com', {
                            delay: 0.01,
                        });
                        void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /^Organization/ }), 'Fellowship', {
                            delay: 0.01,
                        });
                        user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /The Martian API/ }));
                        user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: 'I agree to the terms' }));
                        (0, react_1.act)(function () {
                            user_event_1.default.click(react_1.screen.getByRole('button', { name: 'Submit' }));
                        });
                        _a = expect;
                        return [4 /*yield*/, react_1.screen.findByText('Enter your program name.')];
                    case 1:
                        _a.apply(void 0, [_c.sent()]).toBeInTheDocument();
                        _b = expect;
                        return [4 /*yield*/, react_1.screen.findAllByText('Enter a valid VA-issued email address.')];
                    case 2:
                        _b.apply(void 0, [_c.sent()]).toHaveLength(2);
                        return [2 /*return*/];
                }
            });
        }); });
        it('validates internal api fields when clicked and does not ask for VA email if a VA email exists in the dev info email field', function () {
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /First name/ }), 'Peregrin', {
                delay: 0.01,
            });
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Last name/ }), 'Took', {
                delay: 0.01,
            });
            void user_event_1.default
                .type(react_1.screen.getByRole('textbox', { name: /Email/ }), 'pippin@va.gov', {
                delay: 0.01,
            })
                .then(function () {
                void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /^Organization/ }), 'Fellowship', {
                    delay: 0.01,
                });
                user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: 'I agree to the terms' }));
                (0, react_1.act)(function () {
                    user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /The Martian API/ }));
                    user_event_1.default.click(react_1.screen.getByRole('button', { name: 'Submit' }));
                });
                expect(react_1.screen.findByText('Enter your program name.')).toBeInTheDocument();
                expect(react_1.screen.findByText('Enter a valid VA-issued email address.')).toBeInTheDocument();
                expect(react_1.screen.queryByLabelText('Your VA issued email')).not.toBeInTheDocument();
                return true;
            });
        });
        it('internal api sponsor email should end with va.gov', function () {
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /First name/ }), 'Peregrin', {
                delay: 0.01,
            });
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Last name/ }), 'Took', {
                delay: 0.01,
            });
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Email/ }), 'pippin@theshire.net', {
                delay: 0.01,
            });
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /^Organization/ }), 'Fellowship', {
                delay: 0.01,
            });
            (0, react_1.act)(function () {
                user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /The Martian API/ }));
            });
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /sponsor email/ }), 'frodo.baggins@theshire.net', {
                delay: 0.01,
            });
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /VA issued email/ }), 'samwise@theshire.net', {
                delay: 0.01,
            });
            user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: 'I agree to the terms' }));
            (0, react_1.act)(function () {
                user_event_1.default.click(react_1.screen.getByRole('button', { name: 'Submit' }));
            });
            setTimeout(function () {
                expect(react_1.screen.findByText(/Enter your program name/)).toBeInTheDocument();
                expect(react_1.screen.findAllByText('Enter a valid VA-issued email address.')).toHaveLength(2);
            }, 0);
        });
        it('displays `Sending...` during form submission', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        expect(react_1.screen.queryByRole('button', { name: 'Sending...' })).not.toBeInTheDocument();
                        void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /First name/ }), 'Peregrin', {
                            delay: 0.01,
                        });
                        void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Last name/ }), 'Took', {
                            delay: 0.01,
                        });
                        void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Email/ }), 'pippin@theshire.net', {
                            delay: 0.01,
                        });
                        void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /^Organization/ }), 'Fellowship', {
                            delay: 0.01,
                        });
                        user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /Rings API/ }));
                        user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: 'I agree to the terms' }));
                        (0, react_1.act)(function () {
                            user_event_1.default.click(react_1.screen.getByRole('button', { name: 'Submit' }));
                        });
                        _a = expect;
                        return [4 /*yield*/, react_1.screen.findByRole('button', { name: 'Sending...' })];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
        it('submits the form when all required fields are filled', function () {
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /First name/ }), 'Meriadoc', {
                delay: 0.01,
            });
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Last name/ }), 'Brandybuck', {
                delay: 0.01,
            });
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Email/ }), 'pippin@theshire.net', {
                delay: 0.01,
            });
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /^Organization/ }), 'Fellowship', {
                delay: 0.01,
            });
            user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /Rings API/ }));
            user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: 'I agree to the terms' }));
            (0, react_1.act)(function () {
                user_event_1.default.click(react_1.screen.getByRole('button', { name: 'Submit' }));
            });
            setTimeout(function () {
                expect(mockMakeRequest).toHaveBeenCalledTimes(1);
            }, 0);
        });
    });
    describe('error message', function () {
        beforeEach(function () {
            mockMakeRequest.mockRejectedValue(new Error('bad time'));
        });
        it('displays an error on form submission error', function () {
            expect(react_1.screen.queryByRole('heading', {
                name: 'We encountered a server error while saving your form. Please try again later.',
            })).not.toBeInTheDocument();
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /First name/ }), 'Meriadoc', {
                delay: 0.01,
            });
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Last name/ }), 'Brandybuck', {
                delay: 0.01,
            });
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Email/ }), 'merry@theshire.net', {
                delay: 0.01,
            });
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /^Organization/ }), 'Fellowship', {
                delay: 0.01,
            });
            user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /Rings API/ }));
            user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: 'I agree to the terms' }));
            (0, react_1.act)(function () {
                user_event_1.default.click(react_1.screen.getByRole('button', { name: 'Submit' }));
            });
            setTimeout(function () {
                expect(react_1.screen.findByRole('heading', {
                    name: 'We encountered a server error while saving your form. Please try again later.',
                })).toBeInTheDocument();
            }, 0);
        });
        it('contains a link to the support page', function () {
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /First name/ }), 'Meriadoc', {
                delay: 0.01,
            });
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Last name/ }), 'Brandybuck', {
                delay: 0.01,
            });
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /Email/ }), 'merry@theshire.net', {
                delay: 0.01,
            });
            void user_event_1.default.type(react_1.screen.getByRole('textbox', { name: /^Organization/ }), 'Fellowship', {
                delay: 0.01,
            });
            user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: /Rings API/ }));
            user_event_1.default.click(react_1.screen.getByRole('checkbox', { name: 'I agree to the terms' }));
            user_event_1.default.click(react_1.screen.getByRole('button', { name: 'Submit' }));
            setTimeout(function () {
                var supportLink = react_1.screen.findByRole('link', { name: 'Support page' });
                expect(supportLink).toBeInTheDocument();
            }, 0);
        });
    });
    // describe('SelectedApis', () => {
    //   describe('Standard APIs', () => {
    //     it.each(allKeyAuthApis)('toggles the %s checkbox on click', name => {
    //       const checkbox: HTMLInputElement = screen.getByRole('checkbox', {
    //         name,
    //       }) as HTMLInputElement;
    //       expect(checkbox.checked).toBeFalsy();
    //       userEvent.click(checkbox);
    //       expect(checkbox.checked).toBeTruthy();
    //     });
    //   });
    //   describe('OAuth APIs', () => {
    //     it.each(allOauthApis)('toggles the %s checkbox on click', name => {
    //       const checkboxes: HTMLElement[] = screen.getAllByRole('checkbox', {
    //         name,
    //       });
    //       checkboxes.forEach((checkbox: HTMLInputElement) => {
    //         expect(checkbox.checked).toBeFalsy();
    //         userEvent.click(checkbox);
    //         expect(checkbox.checked).toBeTruthy();
    //       });
    //     });
    //   });
    // });
});
