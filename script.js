const marketSpecs = {
    MNQ: { 
        tickSize: 0.25, 
        tickValue: 0.50, 
        pointValue: 2.00, 
        exchange: 'CME',
        priceFormat: '7230',
        contractSize: '$2 x index value',
        deliveryMonths: 'H, M, U, Z',
        tradingHours: 'Nearly 24 hours'
    },
    MES: { 
        tickSize: 0.25, 
        tickValue: 1.25, 
        pointValue: 5.00, 
        exchange: 'CME',
        priceFormat: '3900.00',
        contractSize: '$5 x index value',
        deliveryMonths: 'H, M, U, Z',
        tradingHours: 'Nearly 24 hours'
    },
    MYM: { 
        tickSize: 1, 
        tickValue: 0.50, 
        pointValue: 0.50, 
        exchange: 'CME',
        priceFormat: '34500',
        contractSize: '$0.50 x index value',
        deliveryMonths: 'H, M, U, Z',
        tradingHours: 'Nearly 24 hours'
    },
    M2K: { 
        tickSize: 0.10, 
        tickValue: 0.50, 
        pointValue: 5.00, 
        exchange: 'CME',
        priceFormat: '2100.0',
        contractSize: '$5 x index value',
        deliveryMonths: 'H, M, U, Z',
        tradingHours: 'Nearly 24 hours'
    },
    ES: { 
        tickSize: 0.25, 
        tickValue: 12.50, 
        pointValue: 50.00, 
        exchange: 'CME',
        priceFormat: '3900.00',
        contractSize: '$50 x index value',
        deliveryMonths: 'H, M, U, Z',
        tradingHours: 'Nearly 24 hours'
    },
    NQ: { 
        tickSize: 0.25, 
        tickValue: 5.00, 
        pointValue: 20.00, 
        exchange: 'CME',
        priceFormat: '14500.00',
        contractSize: '$20 x index value',
        deliveryMonths: 'H, M, U, Z',
        tradingHours: 'Nearly 24 hours'
    },
    YM: { 
        tickSize: 1, 
        tickValue: 5.00, 
        pointValue: 5.00, 
        exchange: 'CME',
        priceFormat: '34500',
        contractSize: '$5 x index value',
        deliveryMonths: 'H, M, U, Z',
        tradingHours: 'Nearly 24 hours'
    },
    RTY: { 
        tickSize: 0.10, 
        tickValue: 5.00, 
        pointValue: 50.00, 
        exchange: 'CME',
        priceFormat: '2100.0',
        contractSize: '$50 x index value',
        deliveryMonths: 'H, M, U, Z',
        tradingHours: 'Nearly 24 hours'
    },
    CL: { 
        tickSize: 0.01, 
        tickValue: 10.00, 
        pointValue: 1000.00, 
        exchange: 'NYMEX',
        priceFormat: '75.50',
        contractSize: '1,000 barrels',
        deliveryMonths: 'All months',
        tradingHours: 'Nearly 24 hours'
    },
    GC: { 
        tickSize: 0.10, 
        tickValue: 10.00, 
        pointValue: 100.00, 
        exchange: 'COMEX',
        priceFormat: '1925.0',
        contractSize: '100 troy ounces',
        deliveryMonths: 'G, J, M, Q, V, Z',
        tradingHours: 'Nearly 24 hours'
    },
    SI: { 
        tickSize: 0.005, 
        tickValue: 25.00, 
        pointValue: 5000.00, 
        exchange: 'COMEX',
        priceFormat: '24.500',
        contractSize: '5,000 troy ounces',
        deliveryMonths: 'H, K, N, U, Z',
        tradingHours: 'Nearly 24 hours'
    },
    NG: { 
        tickSize: 0.001, 
        tickValue: 10.00, 
        pointValue: 10000.00, 
        exchange: 'NYMEX',
        priceFormat: '3.125',
        contractSize: '10,000 MMBtu',
        deliveryMonths: 'All months',
        tradingHours: 'Nearly 24 hours'
    },
    MGC: { 
        tickSize: 0.10, 
        tickValue: 1.00, 
        pointValue: 10.00, 
        exchange: 'COMEX',
        priceFormat: '1925.0',
        contractSize: '10 troy ounces',
        deliveryMonths: 'G, J, M, Q, V, Z',
        tradingHours: 'Nearly 24 hours'
    },
    MSI: { 
        tickSize: 0.005, 
        tickValue: 2.50, 
        pointValue: 500.00, 
        exchange: 'COMEX',
        priceFormat: '24.500',
        contractSize: '1,000 troy ounces',
        deliveryMonths: 'H, K, N, U, Z',
        tradingHours: 'Nearly 24 hours'
    },
    QM: { 
        tickSize: 0.025, 
        tickValue: 2.50, 
        pointValue: 100.00, 
        exchange: 'NYMEX',
        priceFormat: '75.50',
        contractSize: '100 barrels',
        deliveryMonths: 'All months',
        tradingHours: 'Nearly 24 hours'
    },
    MCL: { 
        tickSize: 0.025, 
        tickValue: 2.50, 
        pointValue: 100.00, 
        exchange: 'NYMEX',
        priceFormat: '75.50',
        contractSize: '100 barrels',
        deliveryMonths: 'All months',
        tradingHours: 'Nearly 24 hours'
    },
    NKD: { 
        tickSize: 5, 
        tickValue: 25.00, 
        pointValue: 5.00, 
        exchange: 'CME',
        priceFormat: '28500',
        contractSize: '$5 x index value',
        deliveryMonths: 'H, M, U, Z',
        tradingHours: 'Nearly 24 hours'
    }
};

let currentMode = 'ticks';
let currentDirection = 'bullish';

document.addEventListener('DOMContentLoaded', function() {
    updateMarketInfo();
    
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentMode = this.dataset.mode;
            switchMode(currentMode);
        });
    });

    document.querySelectorAll('.direction-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.direction-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentDirection = this.dataset.direction;
        });
    });

    const marketSelect = document.getElementById('market');
    if (marketSelect) {
        marketSelect.addEventListener('change', updateMarketInfo);
    }
});

function switchMode(mode) {
    document.querySelectorAll('.input-section').forEach(section => {
        section.classList.add('hidden');
    });
    
    const targetSection = document.getElementById(mode + '-inputs');
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
}

function updateMarketInfo() {
    const marketSelect = document.getElementById('market');
    if (!marketSelect) return;
    
    const market = marketSelect.value;
    const spec = marketSpecs[market];
    
    document.getElementById('price-format').textContent = spec.priceFormat;
    document.getElementById('contract-size').textContent = spec.contractSize;
    document.getElementById('tick-size').textContent = spec.tickSize;
    document.getElementById('tick-value').textContent = '$' + spec.tickValue.toFixed(2);
    document.getElementById('point-value').textContent = '$' + spec.pointValue.toFixed(2);
    document.getElementById('exchange').textContent = spec.exchange;
    document.getElementById('delivery-months').textContent = spec.deliveryMonths;
    document.getElementById('trading-hours').textContent = spec.tradingHours;
}

function calculateProfit() {
    const marketSelect = document.getElementById('market');
    const contractsInput = document.getElementById('contracts');
    
    if (!marketSelect || !contractsInput) return;
    
    const market = marketSelect.value;
    const contracts = parseInt(contractsInput.value) || 1;
    const spec = marketSpecs[market];
    
    let totalTicks = 0;
    let totalPoints = 0;
    let pnl = 0;

    if (currentMode === 'ticks') {
        const ticksInput = document.getElementById('ticks');
        if (ticksInput) {
            totalTicks = parseFloat(ticksInput.value) || 0;
            totalPoints = totalTicks * spec.tickSize;
            pnl = totalTicks * spec.tickValue * contracts;
        }
    } else if (currentMode === 'points') {
        const pointsInput = document.getElementById('points');
        if (pointsInput) {
            totalPoints = parseFloat(pointsInput.value) || 0;
            totalTicks = totalPoints / spec.tickSize;
            pnl = totalPoints * spec.pointValue * contracts;
        }
    } else if (currentMode === 'trade') {
        const entryPriceInput = document.getElementById('entry-price');
        const exitPriceInput = document.getElementById('exit-price');
        
        if (entryPriceInput && exitPriceInput) {
            const entryPrice = parseFloat(entryPriceInput.value) || 0;
            const exitPrice = parseFloat(exitPriceInput.value) || 0;
            
            if (entryPrice === 0 || exitPrice === 0) {
                alert('Please enter both entry and exit prices');
                return;
            }
            
            let priceDiff = currentDirection === 'bullish' ? 
                (exitPrice - entryPrice) : (entryPrice - exitPrice);
            
            totalPoints = priceDiff;
            totalTicks = totalPoints / spec.tickSize;
            pnl = totalPoints * spec.pointValue * contracts;
        }
    }

    document.getElementById('pnl-result').textContent = '$' + pnl.toFixed(2);
    document.getElementById('total-ticks').textContent = totalTicks.toFixed(2);
    document.getElementById('total-points').textContent = totalPoints.toFixed(2);
    document.getElementById('per-contract').textContent = '$' + (pnl / contracts).toFixed(2);
    
    const pnlElement = document.getElementById('pnl-result');
    const perContractElement = document.getElementById('per-contract');
    
    if (pnl > 0) {
        pnlElement.className = 'result-value positive';
        perContractElement.className = 'result-value positive';
    } else if (pnl < 0) {
        pnlElement.className = 'result-value negative';
        perContractElement.className = 'result-value negative';
    } else {
        pnlElement.className = 'result-value';
        perContractElement.className = 'result-value';
    }
    
    document.getElementById('results').classList.add('show');
}
