/* sc gratisan nero md
youtube : @nansoffc
minimal kalo mau jual buat sendiri mas */

function _0x3bc0(_0x134b55, _0x2e452b) {
    const _0x580921 = _0x5809();
    return _0x3bc0 = function (_0x3bc09d, _0x1d185a) {
        _0x3bc09d = _0x3bc09d - 0x122;
        let _0x30dfc2 = _0x580921[_0x3bc09d];
        return _0x30dfc2;
    }, _0x3bc0(_0x134b55, _0x2e452b);
}
const _0x21f542 = _0x3bc0;
(function (_0x95d660, _0x123ba9) {
    const _0x2dc46f = _0x3bc0,
        _0x2d62ea = _0x95d660();
    while (!![]) {
        try {
            const _0x5568ba = parseInt(_0x2dc46f(0x129)) / 0x1 * (parseInt(_0x2dc46f(0x14a)) / 0x2) + -parseInt(_0x2dc46f(0x125)) / 0x3 * (parseInt(_0x2dc46f(0x139)) / 0x4) + -parseInt(_0x2dc46f(0x133)) / 0x5 + parseInt(_0x2dc46f(0x132)) / 0x6 + -parseInt(_0x2dc46f(0x13f)) / 0x7 + -parseInt(_0x2dc46f(0x143)) / 0x8 + -parseInt(_0x2dc46f(0x127)) / 0x9 * (-parseInt(_0x2dc46f(0x12f)) / 0xa);
            if (_0x5568ba === _0x123ba9) break;
            else _0x2d62ea['push'](_0x2d62ea['shift']());
        } catch (_0xfdb1e7) {
            _0x2d62ea['push'](_0x2d62ea['shift']());
        }
    }
}(_0x5809, 0xd7470), console['log'](_0x21f542(0x12e)));
import {
    join,
    dirname
} from 'path';
import {
    createRequire
} from 'module';
import {
    fileURLToPath
} from 'url';
import {
    setupMaster,
    fork
} from 'cluster';
import {
    watchFile,
    unwatchFile
} from 'fs';
import _0x1ae70f from 'cfonts';
import {
    createInterface
} from 'readline';
import _0x52ea5d from 'yargs';
const __dirname = dirname(fileURLToPath(
        import.meta[_0x21f542(0x137)])),
    require = createRequire(__dirname),
    {
        name,
        author
    } = require(join(__dirname, './package.json')),
    {
        say
    } = _0x1ae70f,
    rl = createInterface(process[_0x21f542(0x147)], process[_0x21f542(0x12c)]);
say(_0x21f542(0x14b), {
    'font': _0x21f542(0x140),
    'align': _0x21f542(0x131),
    'gradient': [_0x21f542(0x142), 'magenta']
}), say(_0x21f542(0x144), {
    'font': 'console',
    'align': _0x21f542(0x131),
    'gradient': [_0x21f542(0x135), _0x21f542(0x124)]
});

function _0x5809() {
    const _0xd56ecf = ['6000888AUgiSK', '6121740eazESF', 'apply', 'cyan', 'process', 'url', 'test', '16OPvJkg', 'argv', 'join', 'log', 'line', 'console', '1709449GMQbCo', 'pallet', 'message', 'red', '8165728CLjaEd', 'nero-md by nansoffc', 'kill', 'exit', 'stdin', 'parse', 'emit', '8LkXQtP', 'nero md', 'trim', 'listenerCount', 'main.js', 'magenta', '522507rScMgo', 'error', '2973951AtViqq', '[RECEIVED]', '23406rrDVAp', 'exitProcess', '❎ Terjadi kesalahan tak terduga:', 'stdout', 'slice', '✅ Mulai...', '90TvOTqF', 'reset', 'center'];
    _0x5809 = function () {
        return _0xd56ecf;
    };
    return _0x5809();
}
var isRunning = ![];

function start(_0x1ddbd8) {
    const _0x2300af = _0x21f542;
    if (isRunning) return;
    isRunning = !![];
    let _0x292799 = [join(__dirname, _0x1ddbd8), ...process[_0x2300af(0x13a)][_0x2300af(0x12d)](0x2)];
    say([process['argv'][0x0], ..._0x292799][_0x2300af(0x13b)](' '), {
        'font': _0x2300af(0x13e),
        'align': _0x2300af(0x131),
        'gradient': [_0x2300af(0x142), _0x2300af(0x124)]
    }), setupMaster({
        'exec': _0x292799[0x0],
        'args': _0x292799[_0x2300af(0x12d)](0x1)
    });
    let _0x117e99 = fork();
    _0x117e99['on']('message', _0x471787 => {
        const _0x2d9ec8 = _0x2300af;
        console[_0x2d9ec8(0x13c)](_0x2d9ec8(0x128), _0x471787);
        switch (_0x471787) {
        case _0x2d9ec8(0x130):
            _0x117e99[_0x2d9ec8(0x136)][_0x2d9ec8(0x145)](), isRunning = ![], start[_0x2d9ec8(0x134)](this, arguments);
            break;
        case 'uptime':
            _0x117e99['send'](process['uptime']());
            break;
        }
    }), _0x117e99['on'](_0x2300af(0x146), (_0x5f20b9, _0x5c5abc) => {
        const _0xfe0721 = _0x2300af;
        isRunning = ![], console[_0xfe0721(0x126)](_0xfe0721(0x12b), _0x5c5abc);
        if (_0x5c5abc === 0x0) return;
        watchFile(_0x292799[0x0], () => {
            unwatchFile(_0x292799[0x0]), start(_0x1ddbd8);
        });
    });
    let _0x1a6d46 = new Object(_0x52ea5d(process[_0x2300af(0x13a)][_0x2300af(0x12d)](0x2))[_0x2300af(0x12a)](![])[_0x2300af(0x148)]());
    if (!_0x1a6d46[_0x2300af(0x138)]) {
        if (!rl[_0x2300af(0x122)]()) rl['on'](_0x2300af(0x13d), _0x185fd1 => {
            const _0x7690d0 = _0x2300af;
            _0x117e99[_0x7690d0(0x149)](_0x7690d0(0x141), _0x185fd1[_0x7690d0(0x14c)]());
        });
    }
}
start(_0x21f542(0x123));